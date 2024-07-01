
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhistle from "../../src/components/MdiWhistle.vue";

test("MdiWhistle snapshot", () => {
  const wrapper = mount(MdiWhistle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
