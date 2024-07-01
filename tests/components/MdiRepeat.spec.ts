
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRepeat from "../../src/components/MdiRepeat.vue";

test("MdiRepeat snapshot", () => {
  const wrapper = mount(MdiRepeat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
