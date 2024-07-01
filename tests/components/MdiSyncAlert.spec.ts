
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyncAlert from "../../src/components/MdiSyncAlert.vue";

test("MdiSyncAlert snapshot", () => {
  const wrapper = mount(MdiSyncAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
