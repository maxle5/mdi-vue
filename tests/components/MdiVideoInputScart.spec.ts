
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoInputScart from "../../src/components/MdiVideoInputScart.vue";

test("MdiVideoInputScart snapshot", () => {
  const wrapper = mount(MdiVideoInputScart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
