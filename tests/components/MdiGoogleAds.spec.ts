
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleAds from "../../src/components/MdiGoogleAds.vue";

test("MdiGoogleAds snapshot", () => {
  const wrapper = mount(MdiGoogleAds, {});
  expect(wrapper.html()).toMatchSnapshot();
});
