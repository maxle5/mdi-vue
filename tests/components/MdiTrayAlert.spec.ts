
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayAlert from "../../src/components/MdiTrayAlert.vue";

test("MdiTrayAlert snapshot", () => {
  const wrapper = mount(MdiTrayAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
