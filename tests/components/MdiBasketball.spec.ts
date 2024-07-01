
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketball from "../../src/components/MdiBasketball.vue";

test("MdiBasketball snapshot", () => {
  const wrapper = mount(MdiBasketball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
