
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteEmpty from "../../src/components/MdiDeleteEmpty.vue";

test("MdiDeleteEmpty snapshot", () => {
  const wrapper = mount(MdiDeleteEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
