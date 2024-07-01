
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilBox from "../../src/components/MdiPencilBox.vue";

test("MdiPencilBox snapshot", () => {
  const wrapper = mount(MdiPencilBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
