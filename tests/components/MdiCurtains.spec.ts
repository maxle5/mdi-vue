
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurtains from "../../src/components/MdiCurtains.vue";

test("MdiCurtains snapshot", () => {
  const wrapper = mount(MdiCurtains, {});
  expect(wrapper.html()).toMatchSnapshot();
});
