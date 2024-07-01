
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDolby from "../../src/components/MdiDolby.vue";

test("MdiDolby snapshot", () => {
  const wrapper = mount(MdiDolby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
