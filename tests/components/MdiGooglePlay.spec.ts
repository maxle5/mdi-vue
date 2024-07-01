
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGooglePlay from "../../src/components/MdiGooglePlay.vue";

test("MdiGooglePlay snapshot", () => {
  const wrapper = mount(MdiGooglePlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
