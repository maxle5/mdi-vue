
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftOnedrive from "../../src/components/MdiMicrosoftOnedrive.vue";

test("MdiMicrosoftOnedrive snapshot", () => {
  const wrapper = mount(MdiMicrosoftOnedrive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
