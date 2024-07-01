
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlask from "../../src/components/MdiFlask.vue";

test("MdiFlask snapshot", () => {
  const wrapper = mount(MdiFlask, {});
  expect(wrapper.html()).toMatchSnapshot();
});
