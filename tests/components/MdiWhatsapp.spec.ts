
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhatsapp from "../../src/components/MdiWhatsapp.vue";

test("MdiWhatsapp snapshot", () => {
  const wrapper = mount(MdiWhatsapp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
