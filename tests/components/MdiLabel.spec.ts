
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabel from "../../src/components/MdiLabel.vue";

test("MdiLabel snapshot", () => {
  const wrapper = mount(MdiLabel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
