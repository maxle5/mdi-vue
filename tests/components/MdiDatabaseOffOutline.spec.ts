
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseOffOutline from "../../src/components/MdiDatabaseOffOutline.vue";

test("MdiDatabaseOffOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
