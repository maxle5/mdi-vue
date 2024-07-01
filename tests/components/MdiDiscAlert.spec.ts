
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiscAlert from "../../src/components/MdiDiscAlert.vue";

test("MdiDiscAlert snapshot", () => {
  const wrapper = mount(MdiDiscAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
