
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleChrome from "../../src/components/MdiGoogleChrome.vue";

test("MdiGoogleChrome snapshot", () => {
  const wrapper = mount(MdiGoogleChrome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
