
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIronOutline from "../../src/components/MdiIronOutline.vue";

test("MdiIronOutline snapshot", () => {
  const wrapper = mount(MdiIronOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
