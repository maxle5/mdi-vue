
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIncognitoOff from "../../src/components/MdiIncognitoOff.vue";

test("MdiIncognitoOff snapshot", () => {
  const wrapper = mount(MdiIncognitoOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
