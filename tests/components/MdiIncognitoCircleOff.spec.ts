
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIncognitoCircleOff from "../../src/components/MdiIncognitoCircleOff.vue";

test("MdiIncognitoCircleOff snapshot", () => {
  const wrapper = mount(MdiIncognitoCircleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
