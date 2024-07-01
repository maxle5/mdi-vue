
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeaderEqual from "../../src/components/MdiFormatHeaderEqual.vue";

test("MdiFormatHeaderEqual snapshot", () => {
  const wrapper = mount(MdiFormatHeaderEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
