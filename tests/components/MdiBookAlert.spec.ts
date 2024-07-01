
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookAlert from "../../src/components/MdiBookAlert.vue";

test("MdiBookAlert snapshot", () => {
  const wrapper = mount(MdiBookAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
