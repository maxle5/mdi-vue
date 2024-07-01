
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIceCream from "../../src/components/MdiIceCream.vue";

test("MdiIceCream snapshot", () => {
  const wrapper = mount(MdiIceCream, {});
  expect(wrapper.html()).toMatchSnapshot();
});
