
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJira from "../../src/components/MdiJira.vue";

test("MdiJira snapshot", () => {
  const wrapper = mount(MdiJira, {});
  expect(wrapper.html()).toMatchSnapshot();
});
