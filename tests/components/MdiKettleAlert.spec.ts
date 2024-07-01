
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleAlert from "../../src/components/MdiKettleAlert.vue";

test("MdiKettleAlert snapshot", () => {
  const wrapper = mount(MdiKettleAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
