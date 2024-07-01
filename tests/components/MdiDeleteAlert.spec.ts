
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteAlert from "../../src/components/MdiDeleteAlert.vue";

test("MdiDeleteAlert snapshot", () => {
  const wrapper = mount(MdiDeleteAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
