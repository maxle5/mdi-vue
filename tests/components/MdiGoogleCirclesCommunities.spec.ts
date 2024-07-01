
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCirclesCommunities from "../../src/components/MdiGoogleCirclesCommunities.vue";

test("MdiGoogleCirclesCommunities snapshot", () => {
  const wrapper = mount(MdiGoogleCirclesCommunities, {});
  expect(wrapper.html()).toMatchSnapshot();
});
