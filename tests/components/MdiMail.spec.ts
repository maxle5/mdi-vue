
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMail from "../../src/components/MdiMail.vue";

test("MdiMail snapshot", () => {
  const wrapper = mount(MdiMail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
