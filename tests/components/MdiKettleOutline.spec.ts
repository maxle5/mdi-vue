
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleOutline from "../../src/components/MdiKettleOutline.vue";

test("MdiKettleOutline snapshot", () => {
  const wrapper = mount(MdiKettleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
