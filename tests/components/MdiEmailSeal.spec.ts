
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSeal from "../../src/components/MdiEmailSeal.vue";

test("MdiEmailSeal snapshot", () => {
  const wrapper = mount(MdiEmailSeal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
