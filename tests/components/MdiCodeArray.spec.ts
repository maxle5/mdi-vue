
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeArray from "../../src/components/MdiCodeArray.vue";

test("MdiCodeArray snapshot", () => {
  const wrapper = mount(MdiCodeArray, {});
  expect(wrapper.html()).toMatchSnapshot();
});
