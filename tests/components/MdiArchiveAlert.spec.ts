
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveAlert from "../../src/components/MdiArchiveAlert.vue";

test("MdiArchiveAlert snapshot", () => {
  const wrapper = mount(MdiArchiveAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
