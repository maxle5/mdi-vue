
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencil from "../../src/components/MdiPencil.vue";

test("MdiPencil snapshot", () => {
  const wrapper = mount(MdiPencil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
