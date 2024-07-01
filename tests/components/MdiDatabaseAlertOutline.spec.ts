
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseAlertOutline from "../../src/components/MdiDatabaseAlertOutline.vue";

test("MdiDatabaseAlertOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
