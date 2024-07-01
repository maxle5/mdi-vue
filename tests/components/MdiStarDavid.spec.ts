
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarDavid from "../../src/components/MdiStarDavid.vue";

test("MdiStarDavid snapshot", () => {
  const wrapper = mount(MdiStarDavid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
