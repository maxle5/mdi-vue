
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzlePlus from "../../src/components/MdiPuzzlePlus.vue";

test("MdiPuzzlePlus snapshot", () => {
  const wrapper = mount(MdiPuzzlePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
