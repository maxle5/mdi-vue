
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseAlert from "../../src/components/MdiDatabaseAlert.vue";

test("MdiDatabaseAlert snapshot", () => {
  const wrapper = mount(MdiDatabaseAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
