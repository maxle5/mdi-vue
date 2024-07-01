
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressPencil from "../../src/components/MdiProgressPencil.vue";

test("MdiProgressPencil snapshot", () => {
  const wrapper = mount(MdiProgressPencil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
