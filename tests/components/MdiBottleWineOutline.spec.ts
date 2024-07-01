
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleWineOutline from "../../src/components/MdiBottleWineOutline.vue";

test("MdiBottleWineOutline snapshot", () => {
  const wrapper = mount(MdiBottleWineOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
