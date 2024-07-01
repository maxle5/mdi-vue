
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusCircle from "../../src/components/MdiPlusCircle.vue";

test("MdiPlusCircle snapshot", () => {
  const wrapper = mount(MdiPlusCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
