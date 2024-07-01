
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAlert from "../../src/components/MdiHomeAlert.vue";

test("MdiHomeAlert snapshot", () => {
  const wrapper = mount(MdiHomeAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
