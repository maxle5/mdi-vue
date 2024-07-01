
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileAlert from "../../src/components/MdiFileAlert.vue";

test("MdiFileAlert snapshot", () => {
  const wrapper = mount(MdiFileAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
