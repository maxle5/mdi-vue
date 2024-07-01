
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXbox from "../../src/components/MdiMicrosoftXbox.vue";

test("MdiMicrosoftXbox snapshot", () => {
  const wrapper = mount(MdiMicrosoftXbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
