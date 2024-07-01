
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableFurniture from "../../src/components/MdiTableFurniture.vue";

test("MdiTableFurniture snapshot", () => {
  const wrapper = mount(MdiTableFurniture, {});
  expect(wrapper.html()).toMatchSnapshot();
});
