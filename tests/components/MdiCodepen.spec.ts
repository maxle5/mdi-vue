
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodepen from "../../src/components/MdiCodepen.vue";

test("MdiCodepen snapshot", () => {
  const wrapper = mount(MdiCodepen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
