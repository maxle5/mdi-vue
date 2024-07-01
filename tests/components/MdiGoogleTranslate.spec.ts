
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleTranslate from "../../src/components/MdiGoogleTranslate.vue";

test("MdiGoogleTranslate snapshot", () => {
  const wrapper = mount(MdiGoogleTranslate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
