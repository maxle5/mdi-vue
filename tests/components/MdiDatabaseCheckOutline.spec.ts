
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseCheckOutline from "../../src/components/MdiDatabaseCheckOutline.vue";

test("MdiDatabaseCheckOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
