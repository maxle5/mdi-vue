
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleWine from "../../src/components/MdiBottleWine.vue";

test("MdiBottleWine snapshot", () => {
  const wrapper = mount(MdiBottleWine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
