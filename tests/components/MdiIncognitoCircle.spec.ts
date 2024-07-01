
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIncognitoCircle from "../../src/components/MdiIncognitoCircle.vue";

test("MdiIncognitoCircle snapshot", () => {
  const wrapper = mount(MdiIncognitoCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
