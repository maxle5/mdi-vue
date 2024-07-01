
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTerrain from "../../src/components/MdiTerrain.vue";

test("MdiTerrain snapshot", () => {
  const wrapper = mount(MdiTerrain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
