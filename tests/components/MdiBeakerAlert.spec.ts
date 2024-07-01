
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerAlert from "../../src/components/MdiBeakerAlert.vue";

test("MdiBeakerAlert snapshot", () => {
  const wrapper = mount(MdiBeakerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
